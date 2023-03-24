async function getRepositories(){
    let res = await fetch('https://api.github.com/users/Ninawolfs/repos')
    let data = res.json()
    return data
}

getRepositories()
.then (respositories=>{
    respositories.forEach(repo => {
        console.log(repo)
        console.log(repo.name)
        console.log(repo.html_url)
        let parser = new DOMParser()
        let newCard = parser.parseFromString(`<a href=${repo.html_url} class="github-card" data-github="@username">
        <h3>${repo.name}</h3>
        <p>{repository_description}</p>
        <span class="github-card__meta">
            <span class="github-card__language-icon" style="color: #7A0410;">●</span> Javascript
        </span>
        <span class="github-card__meta">
            <i class="fa fa-star" aria-hidden="true"></i>
            <span data-stars>
                <i class="fa fa-spinner" aria-hidden="true"></i>
            </span>
        </span>
        <span class="github-card__meta">
            <i class="fa fa-code-fork" aria-hidden="true"></i>
            <span data-forks>
                <i class="fa fa-spinner" aria-hidden="true"></i>
            </span>
        </span>
      </a>`, 'text/html')
      const Cards = document.querySelector('.github-cards')
    Cards.appendChild(newCard.body.firstChild)
    })
})

