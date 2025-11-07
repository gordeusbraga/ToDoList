import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarefaAtualizada } from './tarefa-atualizada';

describe('TarefaAtualizada', () => {
  let component: TarefaAtualizada;
  let fixture: ComponentFixture<TarefaAtualizada>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarefaAtualizada]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarefaAtualizada);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
