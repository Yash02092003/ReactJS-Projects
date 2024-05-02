import React, { useState , useEffect} from 'react'
import styled from 'styled-components'
import SearchResult from './components/SearchResults/SearchResult'

export const Container = styled.div`
  /* background-color: #323343; */
  max-width: 1280px;
  margin: 0 auto;
`

const TopContainer = styled.section`
  min-height: 140px;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  align-items: center;

  .search{
    input{
      background-color: transparent;
      border: 1px solid red;
      color: white;
      border-radius: 5px;
      height: 40px;
      font-size: 16px;
      padding: 0 10px;
    }
  }

  @media screen and (max-width : 320px) {
    display: flex;
    flex-direction: column;
    
  }
`

const FilterContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 40px;
`

export const Button = styled.button`
  background: #ff4343;
  border-radius: 5px;
  padding: 6px 12px;
  border: none;
  color: white;

  &:hover{
    cursor: pointer;
  }
`
export const BASE_URL = 'http://localhost:9000';

function App() {

  const [data , setData] = useState([]);
  const [loading , setLoading] = useState(false);
  const [error , setError] = useState(null);
  const [filteredData , setFilteredData] = useState(null);
  const [selectedBtn , setSelectedBtn] = useState('all');


  const filterFood = (type) => {
    if(type === 'all'){
      setFilteredData(data);
      setSelectedBtn(type);
    }
    else if(type === 'breakfast'){
      const Fdata = data?.filter( (food) => food.type.toLowerCase().includes(type.toLowerCase()));
      setFilteredData(Fdata);
      setSelectedBtn(type)
    }
    else if(type === 'lunch'){
      const Fdata = data?.filter( (food) => food.type.toLowerCase().includes(type.toLowerCase()));
      setFilteredData(Fdata);
      setSelectedBtn(type)
    }
    else if(type === 'dinner'){
      const Fdata = data?.filter( (food) => food.type.toLowerCase().includes(type.toLowerCase()));
      setFilteredData(Fdata);
      setSelectedBtn(type)
    }
  }

  useEffect(  () => {
    const fetchData = async () => {
      setLoading(true);
      try{
        const response = await fetch(BASE_URL);
        const dat = await response.json();

        setData(dat);
        setFilteredData(dat);
        setLoading(false)
      }
      catch (err){
        setError('Unable To Fetch data');
        console.log(err)
      } 
    }
    fetchData();
  }, []) 

  if(error){
    return <div>{error}</div>
  }

  if(loading){
    return <div>Loading....</div>
  }

  const searchFood = (e) => {
    const searchValue = e.target.value;
    if(searchValue === ""){
      setFilteredData(null);
    }

    const filter = data?.filter( (food) => food.name.toLowerCase().includes(searchValue.toLowerCase()));

    setFilteredData(filter);
  }

  return (
    <>
    <Container>
      <TopContainer>
        <div className='logo'>
          <img src="/images/Foody Zone.svg" alt="" />
        </div>

        <div className='search'>
          <input type="text" placeholder='Search Food' onChange={searchFood}/>
        </div>
      </TopContainer>
      <FilterContainer>
        <Button onClick={() => filterFood('all')}>All</Button>
        <Button onClick={() => filterFood('breakfast')}>Breakfast</Button>
        <Button onClick={() => filterFood('lunch')}>Lunch</Button>
        <Button onClick={() => filterFood('Dinner')}>Dinner</Button>
      </FilterContainer>
    </Container>
    <SearchResult data = {filteredData}/>
    </>
  )
}

export default App