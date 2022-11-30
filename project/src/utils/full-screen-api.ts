import {IDocumentFullscreen, IElementFullScreen} from '../types/full-screen-types';

export interface CombinedElement extends HTMLElement, IElementFullScreen {}
export interface CombinedDocument extends Document, IDocumentFullscreen {}

export function requestFullScreen(element: CombinedElement) {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  }
  else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen();
  }
}

export function exitFullScreen() {
  const doc = document as CombinedDocument;

  if (doc.exitFullscreen) {
    doc.exitFullscreen();
  }
  else if (doc.mozCancelFullScreen) {
    doc.mozCancelFullScreen();
  } else if (doc.webkitExitFullscreen) {
    doc.webkitExitFullscreen();
  } else if (doc.msExitFullscreen) {
    doc.msExitFullscreen();
  }
}

export function checkFullScreen(){
  const doc = document as CombinedDocument;

  return doc.fullscreenElement ||
    doc.mozFullScreenElement ||
    doc.webkitFullscreenElement ||
    doc.webkitFullscreenElement ||
    doc.msFullscreenElement;
}
