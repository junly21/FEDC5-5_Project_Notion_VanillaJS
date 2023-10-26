import { request } from "../../library/api.js";
import { push } from "../../library/router.js";
export default function RemoveButton({ $page, initialState }) {
  const $btn = document.createElement("img");
  $btn.className = "btn";
  $btn.src = "../../img/delete.svg";
  this.state = initialState;

  this.setState = (nextState) => {
    $page.appendChild($btn); //위로 빼면 안나와요ㅠ
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    $btn.innerHTML = "1234";
  };

  const fetchRemove = async () => {
    const { id } = this.state;
    const res = await request(`/documents/${id}`, {
      method: "DELETE",
    });
  };

  this.render();

  $btn.addEventListener("click", async (e) => {
    console.log(this.state);
    await fetchRemove();
    push("");
  });
}
