class Chat {
    public id: number;
    public id_user: number;
    public id_user2: number;
    public message: string;
    public date: string;
    public time: string;
    public status: number; // Assuming it's a number property
    
    constructor(id: number, id_user: number, id_user2: number, message: string, date: string, time: string, status: number) {
        this.id = id;
        this.id_user = id_user;
        this.id_user2 = id_user2;
        this.message = message;
        this.date = date;
        this.time = time;
        this.status = status;
    }
}

export default Chat;
