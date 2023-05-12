import { Component } from '@angular/core';
import { saveAs } from 'file-saver';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  compUrl = 'https://cdn.staticaly.com/gh/bpmn-io/bpmn-js-examples/dfceecba/starter/diagram.bpmn';

  importError?: Error;

  handleImported(event: Event) {

  }
  ngOnSave()
  {
    var canvas = document.getElementById("canvas") as HTMLCanvasElement;
    canvas.toBlob(function(blob) {
    saveAs(blob, "pretty image.png");
});
  }

}
