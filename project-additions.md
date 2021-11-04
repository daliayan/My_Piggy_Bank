    <div>
        <label htmlFor="search-bar"> Search Pig by Name: </label>
        <input type="text" onChange={this.props.filterBankOnChange} placeholder="Searching..."></input>
    </div>

    filterBankOnChange(event){ 
        let orderedBanks = this.state.bankData;
        orderedBanks = orderedBanks.filter(bank => {return bank.toLowerCase().search(event.target.value.toLowerCase()) !== -1});
        this.setState({orderedBanks: orderedBanks});
        // return this.state.bankData.filter(name => name.toLowerCase().includes(this.state.searchTerm.toLowerCase())) 
    }

 filterBankOnChange(event){

        let currentList = [];
        let filteredList = [];

        if (event.target.value !== ''){
            currentList = this.props.bankData;

            filteredList = currentList.filter( bank => {
                return bank.name.toLowerCase().includes(this.state.bankData.toLowerCase())
            });
        } else {
            filteredList = this.props.bankData;
        }
        // console.log('hello!', event.target.value)
        this.setState({
            filtered: filteredList
        })
    }

    filteredBanks() {
        this.state.bankData.filter(bank => {
            return bank.name.toLowerCase().includes(this.state.bankData.toLowerCase())
        })
    } 

    filterBankOnChange(){
        let currentList = [];
        let filteredList = [];

        if (event.target.value !== ''){
            currentList = this.props.bankData;

            filteredList = currentList.filter( bank => {
                return {name: bank.name.toLowerCase().includes(this.props.inputValue.toLowerCase()) }
            });
        } else {
            filteredList = this.props.bankData;
        }
    
        this.setState({
            bankData: filteredList
        })

        console.log('hello!', event.target.value)
    }

    searchTerm(event){
        this.setState({searchTerm: event.target.value})
    }

    filterBankOnChange(){ 
        return this.state.bankData.filter(name => name.toLowerCase().includes(this.state.searchTerm.toLowerCase())) 
    }