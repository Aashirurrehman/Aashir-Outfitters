
const createNav = () => {

    let nav = document.querySelector('.navbar');

    nav.innerHTML = `

        <div class="nav">
            <img src="../images/logo.png"  class="brand-logo" alt="logo">
            <div class="nav-item">
                <div class="search">
                    <input type="text" placeholder="search" class="search-box">
                    <button class="search-btn">Search</button>
                </div>
                <a href="#"><img src="../images/user.png" alt=""> </a>
                <a href="#"><img src="../images/cart.png" alt=""> </a>
            </div>


        </div>
        <i class="fa fa-close" onclick="hideMenu()"></i>
        <ul class="Link-container">
            <li class="link-item"><a href="/public/home.html" class="Link">Home</a></li>
            <li class="link-item"><a href="../About.html" class="Link">About Us</a></li>
            <li class="link-item"><a href="../Bespoke.html" class="Link">Bespoke Suiting</a></li>
            <li class="link-item"><a href="../3PieceSuit.html" class="Link">3 Piece Suits</a></li>
            <li class="link-item"><a href="../wedding.html" class="Link">Wedding Suits</a></li>
            <li class="link-item"><a href="../2PieceSuit.html" class="Link">2 Piece Suits</a></li>   
        </ul>
        <i class="fa fa-bars" onclick="showMenu()"></i>
    
    `;

}

createNav ();