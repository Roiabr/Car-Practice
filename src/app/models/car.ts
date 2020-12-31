export class Car {
  id: number;
  plate_id: number;
  model: number;
  four_on_four: boolean;
  engine_size: number;
  year: number;
  comment: string;
  delivered: number;
  fix_date: Date;
  last_updated: Date;

  Car() {
    this.id = null;
    this.plate_id = null;
    this.model = null;
    this.four_on_four = null;
    this.engine_size = null;
    this.year = null;
    this.comment = null;
    this.delivered = null;
    this.fix_date = null;
    this.last_updated = null;
  }
}
