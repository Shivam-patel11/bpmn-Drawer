import { Component } from '@angular/core';

import { saveAs } from 'file-saver';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  compUrl = 'C:/Users/This pc/Downloads/_image.xml';

  importError?: Error;

  handleImported(event: Event) {

  }
  OnSave()
  {
    var canvas = document.getElementById("canvas") as HTMLCanvasElement;
    canvas.toBlob(function(blob) {
    saveAs(blob, "pretty image.png");
});
  }

}
