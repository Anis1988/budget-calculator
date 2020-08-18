import React,{useState,useEffect} from 'react';
import './App.css';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import Alert from './components/Alert';
import {v4 as uuid} from 'uuid'


function App() {
  const LOCAL_STORAGE_KEY = "whateverman"
  const [expenses, setExpenses] = useState([])
  const [charge, setCharge] = useState('')
  const [amount, setAmount] = useState('')
  const [alert, setAlert] = useState({show:false})
  const [edit, setEdit] = useState(false)
  const [id, setId] = useState(0)

  useEffect(() => {
    const storedItem = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedItem) setExpenses(storedItem)
  }, [])
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(expenses))
  }, [expenses])


  const handleCharge =(e)=> {
    setCharge(e.target.value)
  }

  const handleAlert = ({type,text})=> {
    setAlert({show:true,type,text});
    setTimeout(()=> {
      setAlert({show:false})
    },3000)
  }

  const handleAmount =(e)=> {
    setAmount(e.target.value)
  }

  const handleSubmit = (e)=> {
    e.preventDefault()
    if(charge !=='' && amount> 0){
      if(edit) {
         const list = [...expenses]
          const tempExpenses = list.map(item =>{
            return item.id ===id? {...item,charge,amount} :item;
          })
          setExpenses(tempExpenses)
          setEdit(false)
          handleAlert({type:'success',text:`Item edit to charge ${charge} and amount of ${amount}`})
      } else {
      const singleExpense ={id:uuid(),charge,amount}
      setExpenses([...expenses, singleExpense])
      handleAlert({type:"success",text:"Item Added"})
      }


      setCharge('')
      setAmount('')
    } else {
      handleAlert({type:"danger",text:`charge can't be empty value and amount value hast to be bigger than zero `})
    }
  }

  const clearItems = () => {
    setExpenses([])
    handleAlert({type:'danger',text:"All Item Deleted"})
 }

  const handleDelete = (id) => {
      const list = [...expenses];
      const updatedList = list.filter((item =>  item.id !== id))
      setExpenses(updatedList);
      handleAlert({type:'danger',text:`Item is Deleted`})
  }

  const handleEdit = (id) => {
    // const list = [...expenses];
    // const updatedList = list.filter((item =>  item.id !== id))
    const ItemtoEdit = expenses.find(item => item.id ===id);
    setCharge(ItemtoEdit.charge)
    setAmount(ItemtoEdit.amount)
    setEdit(true)
    setId(id)
    // setExpenses(updatedList);
}

  return (
    <>
    {alert.show && <Alert type={alert.type} text ={alert.text}/>}

    <h1>budget calculator</h1>
    <main className="App">
    <ExpenseForm

     charge={charge} amount={amount}
     handleSubmit={handleSubmit}
     handleAmount={handleAmount}
     handleCharge={handleCharge}
     edit={edit}/>

    <ExpenseList expenses ={expenses} clearItems={clearItems} handleDelete={handleDelete} handleEdit={handleEdit}/>
    </main>
    <h1>
      total spending: <span className="total">
        ${expenses.reduce((acc,curr) => {
          return (acc += parseInt(curr.amount));
        },0)}
      </span>
    </h1>
    </>
  );
}

export default App;
