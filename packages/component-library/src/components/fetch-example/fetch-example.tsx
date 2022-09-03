import { Component, Prop, State, h, Watch } from "@stencil/core";
const SEARCH = "https://api.github.com/search/repositories";

const Result = ({ result }) => {
  return (
    <div class="result">
      <div>
        <a href={result.html_url} target="_blank">
          {result.full_name}
        </a>
        🌟<strong>{result.stargazers_count}</strong>
      </div>
      <p>{result.description}</p>
    </div>
  );
};

@Component({
  tag: "fetch-example",
})
export class FetchExample {
  @Prop() q: string = "stencil";
  @State() results: any[] = [];
  @State() loading: boolean = true;

  @Watch("q")
  watchHandler() {
    this.fetchRepos();
  }

  fetchRepos = () => {
    this.loading = true;
    fetch(`${SEARCH}?q=${this.q}`)
      .then((r) => r.json())
      .then((json) => {
        this.results = (json && json.items) || [];
      })
      .finally(() => {
        this.loading = false;
      });
  };

  componentDidLoad() {
    this.fetchRepos();
  }

  render() {
    if (this.loading) return <div>Loading...</div>;
    if (!this.results.length) return <div>No results</div>;
    return (
      <div>
        <div class="list">
          {this.results.map((result) => (
            <Result result={result} />
          ))}
        </div>
      </div>
    );
  }
}
