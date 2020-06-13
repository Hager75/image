export class Event {
    constructor(
        public id: number =0,
        public title: string='',
        public description: string='',
        public address: string='',
        public event_time: Date = new Date(),
        public duration: string='',
        public num_attendees: number=0,
        // public user_id: string='',
        // public category_id: string=''
    ){}
}
