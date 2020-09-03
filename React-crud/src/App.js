import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import swal from "sweetalert";

//Dados já existentes para simulação

class App extends Component {
  constructor() {
    super();
    this.state = {
      employeeList: [
        {
          firstName: "Fulano",
          lastName: "Detals",
          email: "fulano_detal@outlook.com",
          salary: "00,01",
          joinDate: "01/1/2020",
        },
        {
          firstName: "Zé",
          lastName: "ninguem",
          email: "zezinho@outlook.com",
          salary: "00,10",
          joinDate: "01/1/2020",
        },
        {
          firstName: "harold",
          lastName: "Illert",
          email: "harold_illert@outlook.com",
          salary: "00,00",
          joinDate: "01/1/2020",
        },
      ],
      addEmployee: false,
      editIndex: null,
    };
    this.updateFirstName = this.updateFirstName.bind(this);
    this.updateLastName = this.updateLastName.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
    this.updateSalary = this.updateSalary.bind(this);
    this.updateJobDesc = this.updateJobDesc.bind(this);
    this.updateJob = this.updateJob.bind(this);
    this.updateDate = this.updateDate.bind(this);
  }

  //Funções de evento

  login() {
    const email = document.getElementById(`email`).value;
    const password = document.getElementById("password").value;
    email === "admin@domain.com" && password === "admin"
      ? this.setState({
          user: {
            email: email,
            password: password,
          },
        })
      : swal("Acesso Negado", "Use User: admin@domain.com e Senha: admin ");
  }

  addEmployee() {
    this.setState({
      addEmployee: true,
    });
  }

  cancelAddEmployee() {
    this.setState({
      addEmployee: false,
    });
  }

  addEmployeeData() {
    const date1 = new Date();
    const firstName = document.getElementById(`firstName`).value;
    const lastName = document.getElementById(`lastName`).value;
    const email2 = document.getElementById(`email2`).value;
    const salary = document.getElementById(`salary`).value;
    const job = document.getElementById(`job`).value;
    const jobDesc = document.getElementById(`jobDesc`).value;
    const date = document.getElementById(`date`).value;
    const joinDate =
      date.getDate() + "/" + (+date.getMonth() + 1) + "/" + date.getFullYear();
    this.state.employeeList.push({
      firstName: firstName,
      lastName: lastName,
      email: email2,
      salary: salary,
      job: job,
      date: date,
      jobDesc: jobDesc,
      joinDate: joinDate,
    });
    this.setState({
      addEmployee: false,
    });
  }

  logOut() {
    this.setState({
      user: false,
    });
  }

  deleteEmployee(index) {
    const empList = this.state.employeeList;
    empList.splice(index, 1);
    this.setState({
      empList,
    });
  }

  editEmployee(index) {
    this.setState({
      editIndex: index,
    });
  }

  canceleditEmployee() {
    this.setState({
      editIndex: null,
    });
  }

  updateEmployee() {
    const edI = this.state.editIndex;
    this.state.editedFirstName &&
      (this.state.employeeList[edI].firstName = this.state.editedFirstName);
    this.state.editedLastName &&
      (this.state.employeeList[edI].lastName = this.state.editedLastName);
    this.state.editedJob &&
      (this.state.employeeList[edI].job = this.state.editedJob);
    this.state.editedJobDesc &&
      (this.state.employeeList[edI].jobDesc = this.state.editedJobDesc);
    this.state.editedDate &&
      (this.state.employeeList[edI].date = this.state.editedDate);
    this.state.editedEmail &&
      (this.state.employeeList[edI].email = this.state.editedEmail);
    this.state.editedSalary &&
      (this.state.employeeList[edI].salary = this.state.editedSalary);
    this.setState({
      editIndex: null,
    });
  }

  updateFirstName(e) {
    this.setState({
      editedFirstName: e.target.value,
    });
  }

  updateLastName(e) {
    this.setState({
      editedLastName: e.target.value,
    });
  }

  updateEmail(e) {
    this.setState({
      editedEmail: e.target.value,
    });
  }

  updateSalary(e) {
    this.setState({
      editedSalary: e.target.value,
    });
  }

  updateJob(e) {
    this.setState({
      editedJob: e.target.value,
    });
  }
  updateJobDesc(e) {
    this.setState({
      editedJobDesc: e.target.value,
    });
  }
  updateDate(e) {
    this.setState({
      editedDate: e.target.value,
    });
  }
  //JSX Funções de renderização

  renderHeader() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">
          Bem Vindo ao mini sistema de gerenciamento de funcionários
        </h1>
      </header>
    );
  }

  renderLogin() {
    return (
      <div className="loginForm">
        <h1 className="loginFormHeader">
          <b>Login</b>
        </h1>
        <form>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Email"
            />
          </div>
          <div className="form-group">
            <label>Senha</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Senha"
            />
          </div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              this.login();
            }}
          >
            Login
          </button>
        </form>
      </div>
    );
  }

  rendertoDoList() {
    return (
      <div className="renderTodoList">
        <h1 className="todoHeader">Funcionários</h1>
        <div className="employeeList">
          <table className="table table-striped table-dark">
            <thead>
              <tr>
                <th scope="col" className="centerAll">
                  #
                </th>
                <th scope="col" className="centerAll">
                  Primeiro nome
                </th>
                <th scope="col" className="centerAll">
                  Sobrenome
                </th>
                <th scope="col" className="centerAll">
                  Data de Nascimento
                </th>
                <th scope="col" className="centerAll">
                  Salário
                </th>
                <th scope="col" className="centerAll">
                  Descrição do cargo
                </th>
                <th scope="col" className="centerAll">
                  Cargo
                </th>
                <th scope="col" className="centerAll">
                  Editar
                </th>
                <th scope="col" className="centerAll">
                  Deletar
                </th>
              </tr>
            </thead>
            <tbody>
              {this.state.employeeList.map((value, index) => {
                return this.state.editIndex !== index ? (
                  <tr>
                    <th scope="row" id={index + 1}>
                      {index + 1}
                    </th>
                    <td className="centerAll" id={index + 2}>
                      {value.firstName}
                    </td>
                    <td className="centerAll" id={index + 3}>
                      {value.lastName}
                    </td>
                    <td className="centerAll" id={index + 4}>
                      {value.date}
                    </td>
                    <td className="centerAll" id={index + 5}>
                      R$ {value.salary}
                    </td>
                    <td className="centerAll break" id={index + 6}>
                      {value.jobDesc}
                    </td>
                    <td className="centerAll" id={index + 7}>
                      {value.job}
                    </td>
                    <td className="centerAll" id={index + 8}>
                      <button
                        onClick={() => {
                          this.editEmployee(index);
                        }}
                        className="btn btn-primary"
                      >
                        Editar
                      </button>
                    </td>
                    <td className="centerAll" id={index + 9}>
                      <button
                        onClick={() => {
                          this.deleteEmployee(index);
                        }}
                        className="btn btn-danger"
                      >
                        Deletar
                      </button>
                    </td>
                  </tr>
                ) : (
                  <tr>
                    <th scope="row" id={index + 1}>
                      {index + 1}
                    </th>
                    <td className="centerAll" id={index + 2 + "edit"}>
                      <input
                        type="text"
                        defaultValue={value.firstName}
                        onChange={this.updateFirstName}
                      />
                    </td>
                    <td className="centerAll" id={index + 3 + "edit"}>
                      <input
                        type="text"
                        defaultValue={value.lastName}
                        onChange={this.updateLastName}
                      />
                    </td>
                    <td className="centerAll" id={index + 4 + "edit"}>
                      <input
                        type="date"
                        defaultValue={value.date}
                        onChange={this.updateDate}
                      />
                    </td>
                    <td className="centerAll" id={index + 5 + "edit"}>
                      <input
                        type="number"
                        defaultValue={value.salary}
                        onChange={this.updateSalary}
                      />
                    </td>
                    <td className="centerAll" id={index + 5 + "edit"}>
                      <input
                        type="textarea"
                        defaultValue={value.jobDesc}
                        onChange={this.updateJobDesc}
                      />
                    </td>
                    <td className="centerAll" id={index + 7 + "edit"}>
                      <input
                        type="text"
                        defaultValue={value.job}
                        onChange={this.updateJob}
                      />
                    </td>
                    <td className="centerAll" id={index + 8 + "edit"}>
                      <button
                        onClick={() => {
                          this.canceleditEmployee();
                        }}
                        className="btn btn-primary"
                      >
                        Cancelar
                      </button>
                    </td>
                    <td className="centerAll" id={index + 9}>
                      <button
                        onClick={() => {
                          this.updateEmployee(index);
                        }}
                        className="btn btn-info"
                      >
                        Atualizar
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <a
          class="btn-floating btn-large waves-effect waves-light green"
          onClick={() => {
            this.addEmployee();
          }}
        >
          <i class="material-icons">+</i>
        </a>
      </div>
    );
  }

  renderAddEmployee() {
    return (
      <div className="loginForm">
        <h1 className="todoHeader">Adicionar funcionário</h1>
        <form className="addEmployeeForm">
          <div className="form-group">
            <label>Primeiro nome</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              aria-describedby="emailHelp"
              placeholder="Escreva seu primeiro nome"
            />
          </div>
          <div className="form-group">
            <label>Sobrenome</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              aria-describedby="emailHelp"
              placeholder="Escreva seu sobrenome"
            />
          </div>
          <div className="form-group">
            <label>Data de nascimento</label>
            <input type="date" className="form-control" id="date" />
          </div>
          <div className="form-group">
            <label>Salário</label>
            <input
              type="number"
              className="form-control"
              id="salary"
              aria-describedby="emailHelp"
              placeholder="Escreva seu salário"
            />
          </div>

          <div className="form-group">
            <label>Cargo</label>
            <input
              type="text"
              className="form-control"
              id="job"
              aria-describedby="emailHelp"
              placeholder="Escreva seu cargo"
            />
          </div>
          <div className="form-group">
            <label>Descrição de cargo</label>
            <input
              type="textarea"
              className="form-control"
              id="jobDesc"
              aria-describedby="emailHelp"
              placeholder="Descreva seu cargo"
            />
          </div>
          <a
            class="btn-floating btn-large waves-effect waves-light blue  "
            onClick={() => {
              this.addEmployeeData();
            }}
          >
            <i class="material-icons">+</i>
          </a>
        </form>
        <button
          className="btn btn-danger addEmployeeForm"
          onClick={() => {
            this.cancelAddEmployee();
          }}
        >
          Cancelar
        </button>
      </div>
    );
  }

  renderLogOut() {
    return (
      <div className="logOut">
        <button
          className="btn btn-warning"
          onClick={() => {
            this.logOut();
          }}
        >
          Sair
        </button>
      </div>
    );
  }

  render() {
    return (
      <div className="App">
        {this.renderHeader()}
        {!this.state.user && this.renderLogin()}
        {this.state.user && !this.state.addEmployee && this.rendertoDoList()}
        {this.state.addEmployee && this.renderAddEmployee()}
        {this.state.user && !this.state.addEmployee && this.renderLogOut()}
      </div>
    );
  }
}

export default App;

//Obrigado :)
