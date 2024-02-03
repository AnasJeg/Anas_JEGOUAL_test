import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Fuel } from 'src/app/core/model/fuel';
import { PaginationValue } from 'src/app/core/model/pagination';
import { Pagination } from 'src/app/core/model/request';
import { FuelService } from 'src/app/core/service/fuel.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-fuel',
  templateUrl: './fuel.component.html',
  styleUrls: ['./fuel.component.scss']
})
export class FuelComponent implements OnInit {
  fuels: Fuel[] = [];
  totalElement: number = 0;
  isLoading: boolean = true;
  isUpdate: boolean = false;
  isHaveOne: boolean = false;
  size = 6;
  isModalVisible = false;
  isAddingFuel = false;

  fuelForm!: FormGroup;

  fuelTypes: string[] = ["Gasoil", "SansPlomb", "Excellium"];

  constructor(private service: FuelService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initFuelForm();
    this.loadFuels();
  }

  initFuelForm(): void {
    this.fuelForm = this.fb.group({
      id: [0],
      type: ['', Validators.required],
      totale: [0, Validators.required],
    });
  }

  loadFuels(pageNumber: number = 1): void {
    this.isLoading = true;
    const pagination: Pagination = {
      size: this.size,
      page: pageNumber - 1
    };

    this.service.findAll(pagination).pipe(
      take(1) // Ensure only one subscription is active
    ).subscribe(
      (data: PaginationValue<Fuel>) => {
        this.fuels = data.content ?? [];
        this.totalElement = data.totalElements ?? 0;
        this.isLoading = false;
      },
      error => {
        console.error('Error fetching fuels:', error);
        this.isLoading = false;
      }
    );
  }

  onQueryParamsChange(params: any): void {
    this.loadFuels(params.pageIndex + 1);
  }

  updateFuel(fuel: Fuel): void {
    if (this.fuelForm.valid) {
      this.isAddingFuel = true;
      const updatedFuel: Fuel = this.fuelForm.value;
      this.service.update(updatedFuel).subscribe(
        () => {
          this.loadFuels();
          this.isModalVisible = false;
          this.isAddingFuel = false;
        },
        error => {
          console.error('Error updating fuel:', error);
          this.isAddingFuel = false;
        }
      );
    } else {
      this.fuelForm.markAllAsTouched();
    }
  }

  deleteFuel(id: number): void {
    this.service.delete_by_id(id).subscribe(
      () => {
        this.loadFuels();
        console.log("Fuel deleted successfully");
      },
      (error) => {
        console.error("Error deleting fuel:", error);
      }
    );
  }

  showAddFuelModal(isUpdate: boolean = false, fuel?: Fuel): void {
    console.log("Modal triggered");
    this.isModalVisible = true;
    this.isUpdate = isUpdate;
    this.fuelForm.reset();

    if (isUpdate && fuel) {
      this.fuelForm.patchValue({
        id: fuel.id,
        type: fuel.type,
        totale: fuel.totale,
      });
    }
  }

  handleCancel(): void {
    this.isModalVisible = false;
    this.isUpdate = false;
  }

  handleOk(): void {
    if (this.isUpdate) {
      this.updateFuel(this.fuelForm.value);
    } else {
      this.addFuel();
    }
  }

  addFuel(): void {
    if (this.fuelForm.valid) {
      this.isAddingFuel = true;
      const newFuel: Fuel = this.fuelForm.value;
      this.service.create(newFuel).subscribe(
        () => {
          this.loadFuels();
          this.isModalVisible = false;
          this.isAddingFuel = false;
        },
        error => {
          console.error('Error adding fuel:', error);
          this.isAddingFuel = false;
        }
      );
    } else {
      this.fuelForm.markAllAsTouched();
    }
  }
}
