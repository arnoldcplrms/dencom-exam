# dencom-exam
Name: Arnold Ramos


<h2>Login Endpoint</h2>
    <b>METHOD:</b>Post<br>
    <b>URL:</b> https://dencom-exam.herokuapp.com/api/login <br>
    <b>PARAMS:</b><br>
    <pre> 
    {
      "UserName": "sample",
      "Password": "sample"
    }
    </pre>
    <b>SUCCESS_RESPONSE:</b><br>
    <pre>
    { 
	  "message": "Welcome user"
    }
    </pre>
    <b>ERROR_RESPONSE:</b><br>
    <pre>
    { 
	  "message": "Invalid username or password."
    }
    </pre>
    <h2>Register Endpoint</h2>
    <b>METHOD:</b>Post<br>
    <b>URL:</b> https://dencom-exam.herokuapp.com/api/register <br>
    <b>PARAMS:</b><br>
    <pre> 
    {
      "FirstName": "Lorem Ipsum",
      "LastName": "Lorem Ipsum",
      "MiddleName": "Lorem Ipsum",
      "UserName": "Lorem Ipsum",
      "Password": "Lorem Ipsum"
    }
    </pre>
    <b>SUCCESS_RESPONSE:</b><br>
    <pre>
    { 
      "message": "Inserted succesfully"
    }
    </pre>
    <b>ERROR_RESPONSE:</b> Generic
   
