export default function MkdSDK() {
  this._baseurl = "https://reacttask.mkdlabs.com";
  this._project_id = "reacttask";
  this._secret = "d9hedycyv6p7zw8xi34t9bmtsjsigy5t7";
  this._table = "video";
  this._custom = "";
  this._method = "";

  const raw = this._project_id + ":" + this._secret;
  let base64Encode = btoa(raw);

  this.setTable = function (table) {
    this._table = table;
  };
  
  this.login = async function (email, password, role) {
    try {
      const url = 'https://reacttask.mkdlabs.com/v2/api/lambda/login';
      const headers = {
        'Content-Type': 'application/json',
        'x-project': 'cmVhY3R0YXNrOmQ5aGVkeWN5djZwN3p3OHhpMzR0OWJtdHNqc2lneTV0Nw=='
      };
      const data = {
        email: email,
        password: password,
        role: role
      };
  
      const response = await fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data)
      });
      const responseData = await response.json();
  
      if (responseData.error) {
        // Handle the error case
        // console.error('Login error:', responseData);
        return null;
      }
  
      // Handle the successful login case
      // console.log('Login successful:', responseData);
      localStorage.setItem('token', responseData.token);
      return responseData;
    } catch (error) {
      // console.error('Login error:', error);
      return null;
    }
  };  

  this.getHeader = function () {
    return {
      Authorization: "Bearer " + localStorage.getItem("token"),
      "x-project": base64Encode,
    };
  };

  this.baseUrl = function () {
    return this._baseurl;
  };
  
  this.callRestAPI = async function (payload, method) {
    const header = {
      "Content-Type": "application/json",
      "x-project": base64Encode,
      Authorization: "Bearer " + localStorage.getItem("token"),
    };

    switch (method) {
      case "GET":
        const getResult = await fetch(
          this._baseurl + `/v1/api/rest/${this._table}/GET`,
          {
            method: "post",
            headers: header,
            body: JSON.stringify(payload),
          }
        );
        const jsonGet = await getResult.json();

        if (getResult.status === 401) {
          throw new Error(jsonGet.message);
        }

        if (getResult.status === 403) {
          throw new Error(jsonGet.message);
        }
        return jsonGet;
      
      case "PAGINATE":
        if (!payload.page) {
          payload.page = 1;
        }
        if (!payload.limit) {
          payload.limit = 10;
        }
        const paginateResult = await fetch(
          this._baseurl + `/v1/api/rest/${this._table}/${method}`,
          {
            method: "post",
            headers: header,
            body: JSON.stringify(payload),
          }
        );
        const jsonPaginate = await paginateResult.json();

        if (paginateResult.status === 401) {
          throw new Error(jsonPaginate.message);
        }

        if (paginateResult.status === 403) {
          throw new Error(jsonPaginate.message);
        }
        return jsonPaginate;
      default:
        break;
    }
  };  

  
  this.check = async function (role) {
    try {
      const url = 'https://reacttask.mkdlabs.com/v2/api/lambda/check';
      const headers = {
        'Content-Type': 'application/json',
        'x-project': 'cmVhY3R0YXNrOmQ5aGVkeWN5djZwN3p3OHhpMzR0OWJtdHNqc2lneTV0Nw==',
        'Authorization': "Bearer " + localStorage.getItem("token"),
      };
      const data = {
        role: role
      };
  
      const response = await fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data)
      });
  
      if (response.status === 200) {
        console.log('Token is valid');
        return true;
      } else {
        console.log('Token is invalid');
        return false;
      }
    } catch (error) {
      console.error('Check error:', error);
      return false; 
    }
  };

  this.logout = function () {
    // Remove the token from localStorage
    localStorage.removeItem('token');
    window.location.href = '/admin/login';
  };
  

  // this.dashboardData = async () => {
  //   try {
  //     const response = await fetch("https://reacttask.mkdlabs.com/v1/api/rest/video/PAGINATE", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         "x-project": "cmVhY3R0YXNrOmQ5aGVkeWN5djZwN3p3OHhpMzR0OWJtdHNqc2lneTV0Nw==",
  //         Authorization: "Bearer " + localStorage.getItem("token"),
  //       },
  //       body: JSON.stringify({
  //         payload: {},
  //         page: 1,
  //         limit: 10,
  //       }),
  //     });
  
  //     if (response.error) {
  //       const data = await response.json();
  //       if (data.error) {
  //         throw new Error("API response contains an error");
  //       }
  //       return data;
  //     } else {
        
  //       throw new Error("Failed to fetch dashboard data");
  //       return data;
  //     }
  //   } catch (error) {
  //     console.error("Error fetching dashboard data:", error);
  //     throw error;
  //   }
  // };

  return this;
}

