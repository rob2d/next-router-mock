import { useRouterTests } from "./useMemoryRouter.test";

import router, { MemoryRouter, useRouter, withRouter } from "./index";

describe("next-overridable-hook", () => {
  it("should export a default router", () => {
    expect(router).toBeInstanceOf(MemoryRouter);
    expect(useRouter).toBeInstanceOf(Function);
    expect(withRouter).toBeInstanceOf(Function);
  });

  it("the router should have several default properties set", () => {
    expect(router.events).toEqual(expect.any(Object));
    expect(router.internal).toEqual(expect.any(Object));
    expect(router.async).toBe(false);
    expect(router.push).toEqual(expect.any(Function));
    expect(router.replace).toEqual(expect.any(Function));
    expect(router.setCurrentUrl).toEqual(expect.any(Function));
    expect(router.asPath).toEqual('/');
    expect(router.basePath).toEqual('');
    expect(router.hash).toEqual('');
    expect(router.isFallback).toEqual(false);
    expect(router.isLocaleDomain).toEqual(false);
    expect(router.isPreview).toEqual(false);
    expect(router.isReady).toEqual(true);
    expect(router.locale).toEqual(undefined);
    expect(router.locales).toEqual([]);
    expect(router.pathname).toEqual('/');
    expect(router.query).toEqual({});
  });

  describe("useRouter", () => {
    useRouterTests(router, useRouter);
  });
});
