const createFooter = () => {
  let footer = document.querySelector("footer");

  footer.innerHTML = `
        <div class="footer-content">
            <img src="../images/logo.png" class="logo" alt="">
            <div class="footer-ul-container">
                <ul class="category">
                    <li class="category-tittle">
                        Information
                    </li>
                    <li><a href="#" class="footer-link">Made to Measure</a></li>
                    <li><a href="#" class="footer-link">Privacy Policy</a></li>
                    <li><a href="#" class="footer-link">Terms & Conditions</a></li>
                    <li><a href="#" class="footer-link">Exchange Policy(online Purchase)</a></li>


                </ul>
                <ul class="category">
                    <li class="category-tittle">
                    Men Suiting
                    </li>
                    <li><a href="#" class="footer-link">Bespoke Suits</a></li>
                    <li><a href="#" class="footer-link">Wedding Suits</a></li>
                    <li><a href="#" class="footer-link">2 Piece Suits</a></li>
                    <li><a href="#" class="footer-link">3 Piece Suits</a></li>
                </ul>
            </div>

        </div>
        <p class="footer-title">about company</p>
        <p class="info">
            The construction of our suits has to be executed with precision, because each piece is an
            exquisite one of a kind work of art that our customers get to wear.”

            Aashir-Outfitters started with the dream of helping make bespoke suiting of the highest quality accessible
            to
            a wider market – unlike any brand ever before. We imagined a new era of completely customized suiting
            with the most luxurious fabrics, but in a way that allowed more people to buy & wear our exquisite,
            tailored suits.

            Aashir-Outfitters is our take on the traditional bespoke suit; steeped in Italian traditions of
            craftsmanship
            and creativity, as exhibited by the opulent couture houses of Milan. Such craftsmanship has always been
            reminiscent of a world that is exclusively available to the ultra-wealthy. Thus, we at Aashir-Outfitters
            wanted to take this idea of creating unique pieces conceived by couturiers with just one client in mind.
            In this way, we were able to modify this traditional idea of bespoke suiting & merge it into a more
            accessible business model, so that more and more people can enjoy the luxury of owning a completely one
            of a kind, exquisitely designed, bespoke suit. This is what we at Aashir-Outfitters refer to as the modern
            day renaissance in traditional couture.
        </p>
        <p class="info">Support emails - help@aof.com,
            customersupport@aof.com
        </p>
        <p class="info">Contact-us: 111-263-263, 111-263-264</p>

        <div class="footer-social-container">
            <div>
                <a href="#" class="social-links">Instagram</a>
                <a href="#" class="social-links">Facebook</a>
                <a href="#" class="social-links">Twitter</a>
            </div>
        </div>
        <p class="footer-credits">Aashir-Outfitters, Best suiting online store</p>

    `;
};

createFooter();
