export class Post {
    constructor(
        public id: number =0,
        public title: string='',
        public content: string='',
        public user_id: number=0,
        public comments: any=[]
    ){}
}
