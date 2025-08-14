declare module "pdfjs-dist/build/pdf" {
  const pdfjsLib: unknown;
  export = pdfjsLib;
}

declare module "pdfjs-dist/build/pdf.worker.entry" {
  const pdfjsWorker: unknown;
  export default pdfjsWorker;
}
