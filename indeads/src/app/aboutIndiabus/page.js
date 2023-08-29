import styles from"../page.module.css"

export default function aboutIndibus(){
    return(
        <main className={styles.main}>

            
    


    <section class = "first">
    <h1> <b> <u> <center>  INDEBUS  </center> </u> </b> </h1>
    <p><span class ="color"> <span id ="element"></span> <b>  </b> </span> <span class ="blue">is a digital business solutions company that helps businesses of all sizes grow their online presence. We offer a wide range of services, including digital marketing, web development, e-commerce, and business consulting.</span> </p>

   <p> <span class ="green">
        Our target customers are businesses that want to grow their online presence and reach new customers. We believe that every business has the potential to succeed online, and we are here to help them achieve their goals. </span> </p>

        <p>  <span class ="red">
            Our team of experienced and dedicated professionals has a deep understanding of the digital landscape. We use our knowledge and expertise to help businesses create and execute effective digital marketing campaigns that reach their target audience and achieve their marketing goals. </p></span>

            <p> <span class ="orange"> We have been doing amazing work for all our clients, helping them to grow their online presence and reach new customers. We are committed to providing our clients with the best possible service and helping them achieve their goals.  </p> </span>

            <div class ="arrow" <span id = "aro"> </span>
             </div>
          
              <!-- <p> - </p>
               <p> - </p>
               <p> - </p>
               <p> - </p>
               <p> -</p>
               <p> - </p>
               <p> - </p> -->

                <p> <span class="purple"> We are excited about the future of INDIBUS. We believe that we have the potential to make a real difference in the lives of businesses by helping them achieve their goals online. </span> </p>

                <p>  <span class="aqua">
                    We are confident that you will be happy with our services. We offer a free consultation so that you can learn more about what we do and how we can help you. Contact us today to schedule a consultation. </span> </p>

                    <p><span class ="orangered">
                        Here are some additional things you can mention in the About Us section:  </span> </p>
                        <ul> <span class ="palegreen">
                            <li>  Your company's mission and vision. </span> </li>
                        <li>  <span class ="yellow"> Our team's expertise and experience. </span></li>
                        <li> <span class ="olive" > Our portfolio of work. </span>  </li>
                        <li><span class = "olivedrab"> Our client testimonials. </span> </li>
                        <li> <span class = "olivegreen"> Our awards and recognition. </span> </li>
                        <li><span class = "palevoiletred"> Our commitment to customer service.</span> </li>
                        </ul>

                        <script src="https://unpkg.com/typed.js@2.0.16/dist/typed.umd.js"> </script>
                        <script>
                        var typed = new Typed('#element', {
                          strings: ['INDEBUS'],
                         
                          typeSpeed: 100,
                        });
                      </script>

<script>
    var typed = new Typed('#aro', {
      strings: ['Here are some of our accomplishments :'],
     
      typeSpeed: 100,
    });
  </script>


  </script>
        </main>
    )
}