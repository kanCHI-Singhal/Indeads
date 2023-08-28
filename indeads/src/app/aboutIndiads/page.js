import styles from "../page.module.css"

export default function aboutIndiads() {
    return (
        <main className={styles.main}>
            <div className={styles.gridContainer}>
                <div className={styles.indiadsContent}>
                    <div className={styles.textflow}>
                    <h2>InDiAds</h2>
                    <p>
                        InDiAds is a creative content producing and advertising company that is part of INDIBUS. We specialize in
                        creating digital posters, interactive videos, and advertising them to target customer segments.<br></br>

                        Our team of experienced and creative professionals has a deep understanding of the digital marketing landscape.
                        We use our knowledge and expertise to create content that is engaging, informative, and relevant
                        to your target audience. We also work with influencers to create authentic and impactful marketing campaigns.
                        And we use social media to reach your target audience with targeted and personalized messages.<br></br>

                        We believe that every business has a unique story to tell. We help you tell your story in a way
                        that will resonate with your target audience and achieve your marketing goals.
                    </p>
                    </div>
                
                <div className={styles.indiadsImage}> 
                        <img src="example.png"></img>
                </div>
                </div>

                
                <div className={styles.indiadsServicesContent}>
                    <div className={styles.indiadsImage}>
                        <img src="example.png"></img>
                    </div>

                    <div className={styles.textflow}>
                        <h2>Our Services includes</h2>
                        <p>
                        
                        * Content creation: We create high-quality content that is engaging and informative.<br></br>
                        * Influencer marketing: We work with influencers to create authentic and impactful marketing campaigns.<br></br>
                        * Social media marketing: We use social media to reach your target audience with targeted and personalized messages.<br></br>
                        * Advertising: We place your ads in front of your target audience through a variety of channels, including search engine marketing, 
                            social media advertising, and display advertising.<br></br>
                            
                        
                        
                        We are committed to providing our clients with the best possible service. We offer a free consultation so that you can learn more about what we do and how we can help you.
                        Contact us today to schedule a consultation.
                        

                    </p>
                   </div> 
                </div>



            </div>


        </main>
    )
}