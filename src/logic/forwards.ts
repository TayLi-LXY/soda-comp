type Query = Record<string, string | string[] | null | undefined>;
type State = Record<string, unknown>;
type ForwardParams = { query?: Query; state?: State };
type RouterLike = { push: (href: string) => void };

let router: RouterLike | undefined;

export const setForwardRouter = (nextRouter: RouterLike | undefined) => {
  router = nextRouter;
};

const buildHref = (pathname: string, params?: ForwardParams) => {
  const searchParams = new URLSearchParams();

  Object.entries(params?.query ?? {}).forEach(([key, value]) => {
    if (value == null) {
      return;
    }

    if (Array.isArray(value)) {
      value.forEach((item) => searchParams.append(key, item));
      return;
    }

    searchParams.set(key, value);
  });

  const queryString = searchParams.toString();
  return queryString ? `${pathname}?${queryString}` : pathname;
};

const push = (pathname: string, params?: ForwardParams) => {
  const href = buildHref(pathname, params);

  if (typeof window === 'undefined') {
    return;
  }

  if (params?.state) {
    window.sessionStorage.setItem(`forward-state:${href}`, JSON.stringify(params.state));
  }

  if (router) {
    router.push(href);
    return;
  }

  window.location.assign(href);
};
export const forward_ = (params?: ForwardParams) => {
  push("/", params);
};

export const forwardIndex = (params?: ForwardParams) => {
  push("/index", params);
};

export const forwardIndexMain = (params?: ForwardParams) => {
  push("/index/main", params);
};

export const forwardPay = (params?: ForwardParams) => {
  push("/pay", params);
};

export const forwardLogin = (params?: ForwardParams) => {
  push("/login", params);
};

export const forwardComponentTestingPage = (params?: ForwardParams) => {
  push("/component/testing/page", params);
};

export const forwardTest = (params?: ForwardParams) => {
  push("/test", params);
};

export const forwardRegister = (params?: ForwardParams) => {
  push("/register", params);
};

export const forwardPrivacy = (params?: ForwardParams) => {
  push("/privacy", params);
};

export const forwardService = (params?: ForwardParams) => {
  push("/service", params);
};

export const forwardNewindex = (params?: ForwardParams) => {
  push("/newindex", params);
};

export const forwardScaned = (params?: ForwardParams) => {
  push("/scaned", params);
};

