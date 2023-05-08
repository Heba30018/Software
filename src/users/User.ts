class User {
    email?: string;
    password?: string;
    phone?: string;
    user_type?: string;
  
    constructor(email?: string, password?: string, phone?: string, user_type?: string) {
      this.email = email;
      this.password = password;
      this.phone = phone;
      this.user_type = user_type;
    }
  
 
  }
  
  export default User;