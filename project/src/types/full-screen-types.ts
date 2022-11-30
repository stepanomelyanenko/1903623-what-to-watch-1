export interface IDocumentFullscreen {
  exitFullscreen: () => Promise<void>;
  mozCancelFullScreen: () => Promise<void>;
  webkitExitFullscreen: () => Promise<void>;
  msExitFullscreen: () => Promise<void>;
  mozFullScreenElement: Element | null;
  webkitFullscreenElement: Element | null;
  msFullscreenElement: Element | null;
}

export interface IElementFullScreen {
  requestFullscreen: (options?: FullscreenOptions) => Promise<void>;
  webkitRequestFullscreen: (options?: FullscreenOptions) => Promise<void>;
  mozRequestFullScreen: (options?: FullscreenOptions) => Promise<void>;
  msRequestFullscreen: () => Promise<void>;
}
