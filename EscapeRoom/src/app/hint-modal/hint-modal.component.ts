import { Component } from '@angular/core';
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-hint-modal',
  templateUrl: './hint-modal.component.html',
  styleUrls: ['./hint-modal.component.css']
})
export class HintModalComponent {
  hintText = 'Click "New Hint" to get a hint';

  constructor(public activeModal: NgbActiveModal) { }

  close(): void {
    this.activeModal.close();
  }

  newHint(): void {
    this.hintText = 'Clicked Hint';
  }
}
