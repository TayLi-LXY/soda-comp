
/**
 * 入参明细:
 * dispatch WEB状态更新
 * setter 页面设置器
 * fileUrl 文件链接
 */
export interface FlowCodeOnInitializeTableDataParams {
  dispatch: any;
  setter?: any;
  fileUrl: any;
}

/**
 * 出参明细:
 */
export interface FlowCodeOnInitializeTableDataResults {
}

const STORAGE_FILE_DOWNLOAD_URL = '/horsecoder-storage/api/sys/storage/file/download';
const STORAGE_USER = 'agent';
const MAX_DISPLAY_ROWS = 10;

function normalizeFileUrl(fileUrl: any): string {
  if (typeof fileUrl === 'string') {
    return fileUrl.trim();
  }

  if (fileUrl && typeof fileUrl === 'object') {
    return String(fileUrl.fileUrl || fileUrl.url || fileUrl.fileName || '').trim();
  }

  return '';
}

function buildDownloadUrl(fileUrl: string) {
  if (/^(https?:)?\/\//.test(fileUrl) || fileUrl.startsWith('/') || fileUrl.startsWith('blob:')) {
    return fileUrl;
  }

  return `${STORAGE_FILE_DOWNLOAD_URL}?fileName=${encodeURIComponent(fileUrl)}&user=${STORAGE_USER}`;
}

function getUniqueFieldName(name: string, existingFields: Set<string>, index: number) {
  const normalizedName = (name || `column_${index + 1}`).trim() || `column_${index + 1}`;
  let fieldName = normalizedName;
  let suffix = 2;

  while (existingFields.has(fieldName)) {
    fieldName = `${normalizedName}_${suffix}`;
    suffix += 1;
  }

  existingFields.add(fieldName);
  return fieldName;
}

function parseCsvRows(text: string) {
  const rows: string[][] = [];
  let currentRow: string[] = [];
  let currentCell = '';
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const nextChar = text[i + 1];

    if (char === '"' && inQuotes && nextChar === '"') {
      currentCell += '"';
      i += 1;
      continue;
    }

    if (char === '"') {
      inQuotes = !inQuotes;
      continue;
    }

    if (!inQuotes && char === ',') {
      currentRow.push(currentCell);
      currentCell = '';
      continue;
    }

    if (!inQuotes && (char === '\n' || char === '\r')) {
      if (char === '\r' && nextChar === '\n') {
        i += 1;
      }
      currentRow.push(currentCell);
      rows.push(currentRow);
      currentRow = [];
      currentCell = '';
      continue;
    }

    currentCell += char;
  }

  currentRow.push(currentCell);
  rows.push(currentRow);

  return rows.filter(row => row.some(cell => cell.trim() !== ''));
}

function getJsonColumnName(column: any, index: number) {
  if (typeof column === 'string') {
    return column;
  }

  return column?.field || column?.name || column?.headerName || column?.title || `column_${index + 1}`;
}

function convertArrayRowsToObjects(columns: any[], rows: any[]) {
  const fieldNames = columns.map((column, index) => getJsonColumnName(column, index));

  return rows.map(row => {
    if (row && typeof row === 'object' && !Array.isArray(row)) {
      return row;
    }

    return fieldNames.reduce<Record<string, any>>((record, fieldName, index) => {
      record[fieldName] = Array.isArray(row) ? row[index] ?? '' : row;
      return record;
    }, {});
  });
}

function findJsonRecordArray(parsed: any) {
  const candidates = [
    parsed,
    parsed?.records,
    parsed?.data?.value,
    parsed?.data?.value?.records,
    parsed?.data,
    parsed?.data?.records,
    parsed?.rows,
    parsed?.value,
    parsed?.value?.records,
  ];
  const matchedArray = candidates.find(Array.isArray);
  if (matchedArray) return matchedArray;

  if (parsed && typeof parsed === 'object') {
    return Object.values(parsed).find(Array.isArray);
  }

  return undefined;
}

function getJsonRows(parsed: any) {
  if (Array.isArray(parsed?.columns) && Array.isArray(parsed?.rows)) {
    return convertArrayRowsToObjects(parsed.columns, parsed.rows).slice(0, MAX_DISPLAY_ROWS);
  }

  if (Array.isArray(parsed?.data?.value?.columns) && Array.isArray(parsed?.data?.value?.rows)) {
    return convertArrayRowsToObjects(parsed.data.value.columns, parsed.data.value.rows).slice(0, MAX_DISPLAY_ROWS);
  }

  const data = findJsonRecordArray(parsed) || [parsed];

  return data.slice(0, MAX_DISPLAY_ROWS).map((row: any) => (
    row && typeof row === 'object' && !Array.isArray(row)
      ? row
      : { value: row }
  ));
}

function formatCsvCell(value: any) {
  if (value === null || value === undefined) {
    return '';
  }

  if (typeof value === 'object') {
    return JSON.stringify(value);
  }

  return String(value);
}

function escapeCsvCell(value: any) {
  const cell = formatCsvCell(value);

  if (/[",\r\n]/.test(cell)) {
    return `"${cell.replace(/"/g, '""')}"`;
  }

  return cell;
}

function convertJsonToCsvText(text: string) {
  const parsed = JSON.parse(text);
  const rows = getJsonRows(parsed);
  const fields = Array.from(rows.reduce<Set<string>>((fieldSet, row) => {
    Object.keys(row || {}).forEach(key => fieldSet.add(key));
    return fieldSet;
  }, new Set<string>()));

  const header = fields.map(escapeCsvCell).join(',');
  const body = rows.map(row => fields.map(field => escapeCsvCell(row?.[field])).join(','));

  return [header, ...body].join('\n');
}

function parseCsvTableData(text: string) {
  const normalizedText = text.replace(/^\uFEFF/, '');
  const rows = parseCsvRows(normalizedText);
  const headerRow = rows[0] || [];
  const existingFields = new Set<string>();
  const fields = headerRow.map((header, index) => getUniqueFieldName(header, existingFields, index));
  const rowData = rows.slice(1, MAX_DISPLAY_ROWS + 1).map(row => fields.reduce<Record<string, any>>((record, field, index) => {
    record[field] = row[index] ?? '';
    return record;
  }, {}));

  return {
    columnDefs: fields.map(field => ({ field, headerName: field })),
    rowData,
  };
}

function parseTableData(text: string) {
  const normalizedText = text.replace(/^\uFEFF/, '');

  try {
    return parseCsvTableData(convertJsonToCsvText(normalizedText));
  } catch {
    return parseCsvTableData(normalizedText);
  }
}

/**
 * 初始化表格数据
 * FLOW_NODE_ON_INITIALIZE_TABLE_DATA
 * 唯一id: QueryResultDataTable/FLOW_CODE_ON_INITIALIZE_TABLE_DATA
 */
export const flowCodeOnInitializeTableData = async (params: FlowCodeOnInitializeTableDataParams): Promise<FlowCodeOnInitializeTableDataResults> => {
  // 初始化流程出参
  // 开始流程
  const { setter } = params;
  const { fileUrl } = params;

  setter.setColumnDefs([]);
  setter.setRowData([]);

  const normalizedFileUrl = normalizeFileUrl(fileUrl);
  if (!normalizedFileUrl) {
    console.warn('[FlowCode] 未获取到表格文件链接');
    return {};
  }

  try {
    const response = await fetch(buildDownloadUrl(normalizedFileUrl), {
      headers: {
        accept: 'application/json,text/csv,text/plain,*/*',
      },
    });

    if (!response.ok) {
      throw new Error(`文件下载失败: ${response.status}`);
    }

    const text = await response.text();
    const { columnDefs, rowData } = parseTableData(text);

    setter.setColumnDefs(columnDefs);
    setter.setRowData(rowData);
    console.log('[FlowCode] 表格数据加载完成:', {
      columns: columnDefs.length,
      rows: rowData.length,
      fileUrl: normalizedFileUrl,
    });
  } catch (err) {
    console.error('[FlowCode] 表格数据加载失败:', err);
  }
  // 结束流程
  return {}
};
