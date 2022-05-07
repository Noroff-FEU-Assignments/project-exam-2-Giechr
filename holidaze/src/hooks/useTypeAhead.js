import { Typeahead, withAsync } from "react-bootstrap-typeahead";

const AsyncTypeahead = withAsync(Typeahead);
export default function useTypeAhead(){
  
  <AsyncTypeahead
    isLoading={this.state.isLoading}
    labelKey={(option) => `${option.login}`}
    onSearch={(id) => {
      this.setState({ isLoading: true });
      fetch(`http://localhost:1337/api/accommadations/${id}?populate=*`)
        .then((resp) => resp.json())
        .then((json) =>
          this.setState({
            isLoading: false,
            options: json.items,
            
          })
          
        );  
    }}
    options={this.state.options}
     
  />;

}
