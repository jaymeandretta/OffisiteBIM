import { Color } from "three";
import { IfcViewerAPI } from "web-ifc-viewer";

const container = document.getElementById("viewer-container");
const viewer = new IfcViewerAPI({
  container,
  backgroundColor: new Color(0xffffff),
});
viewer.grid.setGrid();
viewer.axes.setAxes();

async function loadIfc(url) {
  await viewer.IFC.setWasmPath("../../assets/wasm/");
  const model = await viewer.IFC.loadIfcUrl(url);
  viewer.shadowDropper.renderShadow(model.modelID);
}

loadIfc("../../assets/models/AC20-FZK-Haus.ifc");
