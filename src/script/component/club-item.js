class ClubItem extends HTMLElement {
    
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    set club(club) {
        this._club = club;
        this.render();
    }
  
    render() {
        this.shadowDOM.innerHTML = `
            <style>
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }
                :host {
                    display: block;
                    margin-bottom: 18px;
                    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                    border-radius: 10px;
                    overflow: hidden;
                }
                
                .fan-art-club {
                    margin-top: 25px;
                    display: block;
                    margin-left: auto;
                    margin-right: auto;
                    width: 60%;
                    max-height: 500px;
                    object-fit: cover;
                    object-position: center;
                    border-radius: 20px;
                }
                
                .club-info {
                    padding: 24px;
                }
                
                .club-info > h2 {
                    font-weight: lighter;
                }
                
                .club-info > p {
                    margin-top: 10px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 10; /* number of lines to show */
                }
            </style>
            <img class="fan-art-club" src="${this._club.strMealThumb}" alt="Fan Art">
            <div class="club-info">
                <h2>${this._club.strMeal}</h2>
                <p><b>Area : </b>${this._club.strArea}</p>
                <p><b>Category : </b>${this._club.strCategory}</p>
                <p><b>Instructions : </b></p>
                <p>${this._club.strInstructions}</p>
            </div>`;
    }
 }
  
 customElements.define("club-item", ClubItem);