export class Course {
    constructor(
        public id: number =0,
        public name: string='',
        public duration: string='',
        public start_date: Date = new Date(),
        public end_date: Date = new Date(),
        public group_limit: string='',
        public description: string='',
        public instructor_name: string='',
        public price: string='',
        // public user_id: string='',
        // public category_id: string=''
    ){}
}