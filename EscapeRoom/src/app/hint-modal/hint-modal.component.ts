import { Component, OnInit } from '@angular/core';
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { HintSelectionService} from '../hint-selection.service';

@Component({
  selector: 'app-hint-modal',
  templateUrl: './hint-modal.component.html',
  styleUrls: ['./hint-modal.component.css']
})
export class HintModalComponent implements OnInit{
  hintText = 'Click "New Hint" to get a hint';

  constructor(public activeModal: NgbActiveModal,
              private hintSelection: HintSelectionService) { }

  ngOnInit(): void {
    this.refreshText();
  }

  close(): void {
    this.activeModal.close();
  }

  newHint(): void {
    this.hintSelection.HintPicker();
    this.hintText = this.hintSelection.hintText;
  }

  refreshText(): void {
    this.hintText = this.hintSelection.hintText;
  }
}
