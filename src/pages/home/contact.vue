<template>
  <section id="contact">
    <h1 class="section-title">Contato</h1>
    <div class="gmap-area">
      <div>
        <div class="uk-child-width-1-2@s" uk-grid>
          <div>
            <div class="gmap">
              <iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=DSC - UFCG,+Campina+Grande&amp;aq=0&amp;oq=joomshaper&amp;sll=-7.2135589,-35.9066347&amp;sspn=42.766543,80.332031&amp;ie=UTF8&amp;hq=JoomShaper,&amp;hnear=UFCG,+ DSC&amp;ll=-7.2135589,-35.9066347&amp;spn=-7.2135589,-35.9066347&amp;t=m&amp;z=14&amp;iwloc=A&amp&amp;output=embed"></iframe>
            </div>
          </div>
          <center><br>
            <spam>
              <i uk-icon="mail"></i>
              <a href="mailto:opi@dsc.ufcg.edu.br">opi@dsc.ufcg.edu.br</a>
            </spam>
            <br>
            <spam>
              <i uk-icon="receiver"></i>
                +55 (83) 2101-1122 (Prof. 
                <a href="http://www.dsc.ufcg.edu.br/~rohit/Rohit_Gheyi/Home.html" target="_blank">Rohit Gheyi</a>).
            </spam>
            <br><br>
            <spam> Rua: Aprígio Veloso, 882, Bloco CN, Universitário</spam><br>
            <spam> Campina Grande, PB, Brasil</spam><br>
            <spam> CEP: 58429-900</spam>
            <br>
          </center>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
  @import 'src/assets/app';

  #contact {
    @extend %section-padding;
  }

  .gmap-area {
//    background-image: url("../images/map.jpg");
    background-position: 0 0;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 70px 0;
  }

  .gmap-area .gmap iframe {
    border-radius: 50%;
    height: 280px;
    width: 300px;
  }

  .gmap{
    border: 10px solid #f6f5f0;
    border-radius: 50%;
    height: 300px;
    width: 300px;
    box-shadow: 0px 0px 3px 3px #e7e4dc;
    overflow: hidden;
    position: relative;
    margin: 0 auto;
  }

  .gmap-area .map-content ul {
    list-style: none;
  }

  .gmap-area .map-content address h5{
    font-weight: 700;
    /* font-size: 16px; */
  }
</style>
