import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[errMsg]'
})
export class ErrMsgDirective implements OnInit {
  private _color: string = 'red';
  private _message: string = 'Required field';

  htmlElement: ElementRef<HTMLElement>;
  
  @Input() set color( valor: string) {
    this._color = valor;
    this.setColor();
  }

  @Input() set message( valor: string ) {
    this._message = valor;
    this.setMessage();
  }

  @Input() set valid( value: boolean ) {
    if( value ) {
      this.htmlElement.nativeElement.classList.add('hidden');
    } else {
      this.htmlElement.nativeElement.classList.remove('hidden');
    }
  }

  constructor( private el: ElementRef<HTMLElement>  ) {
    this.htmlElement = el;
  }


  ngOnInit(): void {
    this.setStyle();
    this.setColor();
    this.setMessage();
  }

  setStyle(): void {
    this.htmlElement.nativeElement.classList.add('form-text');
  }

  setColor(): void {
    this.htmlElement.nativeElement.style.color = this._color;
  }

  setMessage(): void {
    this.htmlElement.nativeElement.innerText = this._message;
  }

}
