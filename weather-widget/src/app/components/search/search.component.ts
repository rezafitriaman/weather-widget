import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subject, debounceTime, distinctUntilChanged, filter, map, takeUntil } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {
  @Input() onCanNotFind: boolean = false;
  @Output() OnFocusEventEmit = new EventEmitter<'focus'>();
  @Output() resultEmit = new EventEmitter<string>();
  search: FormControl = new FormControl('');
  result: Observable<string>;

  componentDestroyed$: Subject<boolean> = new Subject();

  constructor() { 
    this.result = this.search.valueChanges
    .pipe(
      filter(search => search !== '' && search !== null && search.length > 2),
      map(search => search.trim()),
      debounceTime(1000),
      distinctUntilChanged()
    );
  }

  ngOnInit(): void {
    this.result
    .pipe(
      takeUntil(this.componentDestroyed$)
    )
    .subscribe(result => {
      this.resultEmit.emit(result);
    })
  }

  onFocus(event: FocusEvent): void {
    this.OnFocusEventEmit.emit((event.type as 'focus'));

  }

  ngOnDestroy(): void {
    this.componentDestroyed$.next(true);
    this.componentDestroyed$.complete();
  }
}
