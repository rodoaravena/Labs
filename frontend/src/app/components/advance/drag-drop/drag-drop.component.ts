import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { DragulaService } from 'ng2-dragula';
import { Subscription } from 'rxjs';

let personId = 0;

class Person {
  id: number;
  constructor(public name: string) {
    this.id = personId++;
  }
}

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DragDropComponent implements OnInit, OnDestroy {
  
  public BAG = "DRAGULA_EVENTS";
  public subs = new Subscription();
  left = [
    new Person('Steven'),
    new Person('Paula'),
    new Person('Persephone'),
    new Person('Jacob'),
  ];
  right = [
    new Person('Delia'),
    new Person('Jackson'),
  ];
  public MANY_ITEMS = 'MANY_ITEMS';
  public many = ['The', 'possibilities', 'are', 'endless!'];
  public many2 = ['Explore', 'them'];
  public groups: Array<any> = [
    {
      name: 'Group A',
      items: [{ name: 'Item A' }, { name: 'Item B' }, { name: 'Item C' }, { name: 'Item D' }]
    },
    {
      name: 'Group B',
      items: [{ name: 'Item 1' }, { name: 'Item 2' }, { name: 'Item 3' }, { name: 'Item 4' }]
    }
  ];

  public clicked = {
    'one': false,
    'two': false,
    'three': false,
    'four': false,
    'five': false,
    'six': false,
    'seven': false
  };

  constructor(private dragulaService: DragulaService) {
    this.subs.add(dragulaService.drag(this.BAG)
      .subscribe(({ el }) => {
        this.removeClass(el, 'ex-moved');
      })
    );
    this.subs.add(dragulaService.drop(this.BAG)
      .subscribe(({ el }) => {
        this.addClass(el, 'ex-moved');
      })
    );
    this.subs.add(dragulaService.over(this.BAG)
      .subscribe(({ el, container }) => {
        this.addClass(container, 'ex-over');
      })
    );
    this.subs.add(dragulaService.out(this.BAG)
      .subscribe(({ el, container }) => {
        this.removeClass(container, 'ex-over');
      })
    );
    //For drag and delete data from container
    dragulaService.createGroup("SPILL", {
      removeOnSpill: true
    });

    dragulaService.createGroup("REVERT", {
      revertOnSpill: true
    });

    //For copying item from one container to other
    dragulaService.createGroup('PERSON', {
      copy: (el, source) => {
        return source.id === 'left';
      },
      copyItem: (person: Person) => {
        return new Person(person.name);
      },
      accepts: (el, target, source, sibling) => {
        // To avoid dragging from right to left container
        return target.id !== 'left';
      }
    });

    dragulaService.createGroup('COPYABLE', {
      copy: (el, source) => {
        return source.id === 'left';
      },
      accepts: (el, target, source, sibling) => {
        // To avoid dragging from right to left container
        return target.id !== 'left';
      }
    });

    dragulaService.createGroup("HANDLES", {
      moves: (el, container, handle) => {
        return handle.className === 'handle';
      }
    });

    this.dragulaService.createGroup("COLUMNS", {
      direction: 'horizontal',
      moves: (el, source, handle) => handle.className === "group-handle"
    });
  }

  ngOnInit() { }

  //onClick event on container
  public onclick(key: any) {
    this.clicked[key] = true;
    setTimeout(() => {
      this.clicked[key] = false;
    }, 2000);
  }

  private hasClass(el: Element, name: string): any {
    return new RegExp('(?:^|\\s+)' + name + '(?:\\s+|$)').test(el.className);
  }

  private addClass(el: Element, name: string): void {
    if (!this.hasClass(el, name)) {
      el.className = el.className ? [el.className, name].join(' ') : name;
    }
  }

  private removeClass(el: Element, name: string): void {
    if (this.hasClass(el, name)) {
      el.className = el.className.replace(new RegExp('(?:^|\\s+)' + name + '(?:\\s+|$)', 'g'), '');
    }
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
    this.dragulaService.destroy('SPILL');
    this.dragulaService.destroy('REVERT');
    this.dragulaService.destroy('PERSON');
    this.dragulaService.destroy('COPYABLE');
    this.dragulaService.destroy('HANDLES');
    this.dragulaService.destroy('COLUMNS');
  }
}
