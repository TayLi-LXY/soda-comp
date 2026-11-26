const check_ = (): boolean => {
  return true || false;
};

const checkIndex = (): boolean => {
  return true || false;
};

const checkIndexMain = (): boolean => {
  return true || false;
};

const checkPay = (): boolean => {
  return true || false;
};

const checkLogin = (): boolean => {
  return true || false;
};

const checkComponentTestingPage = (): boolean => {
  return true || false;
};

const checkTest = (): boolean => {
  return true || false;
};

const checkRegister = (): boolean => {
  return true || false;
};

const checkPrivacy = (): boolean => {
  return true || false;
};

const checkService = (): boolean => {
  return true || false;
};

const checkNewindex = (): boolean => {
  return true || false;
};

const checkScaned = (): boolean => {
  return true || false;
};

export const checkAllPath = (path: string, record: Record<string, boolean>): boolean => {
  switch(path){
    case '/': return check_()
    case '/index': return checkIndex()
    case '/index/main': return checkIndexMain()
    case '/pay': return checkPay()
    case '/login': return checkLogin()
    case '/component/testing/page': return checkComponentTestingPage()
    case '/test': return checkTest()
    case '/register': return checkRegister()
    case '/privacy': return checkPrivacy()
    case '/service': return checkService()
    case '/newindex': return checkNewindex()
    case '/scaned': return checkScaned()
    default: return !!!record;
  }
  return false;
};