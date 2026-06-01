import { motion } from "framer-motion";
import brideImg from "@/assets/bride-portrait.jpg";
import groomImg from "@/assets/groom-portrait.jpg";

const VowCard = ({
  name,
  image,
  vow,
  reverse = false,
}: {
  name: string;
  image: string;
  vow: string;
  reverse?: boolean;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="grid grid-cols-1 md:grid-cols-2"
  >
    {/* Text block */}
    <div className={`flex flex-col justify-center p-10 md:p-16 bg-card ${reverse ? "md:order-2" : "md:order-1"}`}>
      <p className="font-script text-3xl md:text-4xl text-gold mb-6">{name}</p>
      <div className="font-body text-sm md:text-base leading-relaxed text-muted-foreground whitespace-pre-wrap">
        {vow}
      </div>
    </div>

    {/* Image block */}
    <div className={`${reverse ? "md:order-1" : "md:order-2"}`}>
      <img
        src={image}
        alt={name}
        className="w-full h-[400px] md:h-full object-cover object-top"
      />
    </div>
  </motion.div>
);

const VowsSection = () => (
  <section id="vows" className="section-padding bg-background">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-display text-3xl md:text-5xl text-foreground mb-4">Our Vows</h2>
        <div className="gold-line w-16 mx-auto" />
      </motion.div>

      <div className="flex flex-col gap-1">
        <VowCard
          name="Oluwatomide"
          image={groomImg}
          vow={`Ibukunoluwa, shortly before I met you, I prayed to God for a wife and from the first time we spoke, I knew this was it for me. 
God didn't just bless me with you because I wanted you, He blessed me with you because He knows I need you.


Enikejimi, you are my forever. I have been blessed all my life but you are a double portion of God's goodness to me. All my life, I have lived my life for myself but from today I lay down my life to serving you and our family in alignment to God's will. I promise to make God proud by loving you right. And I hope that when you stare at me you remember Calvary. On days when I lack wisdom I will lean on God, and God will be the center of our home.


Beyond the flutter of my heart and the butterflies in my belly. I promise to choose commitment over convenience, duty over feelings and responsibility over frivolity. I promise to stick to you through the peaks and the valleys. Your pain will be my pain and your joy will be my joy. I have been chasing one thousand all my life now I'm ready to chase ten thousand with you.


Give me your hands and I will love you forever.`}
        />
        <VowCard
          name="Ibukunoluwa"
          image={brideImg}
          vow={`Tèmi, I love you and always will.

As I prayed the same prayers for almost a year before your arrival, according to Esther 1:10 , 'your heart becomes merry with joy and peace in the Holy Ghost that if you were in a wrong relationship, it becomes broken and if you had trouble moving on from your previous relationship, you find comfort now and that you search for me amongst others both spiritually and physically' ,  I got my answer and today, I vow  to bring comfort to you in everyway and everyday as God helps me. I will love you in word and deed. I choose you and promise to choose you everyday we wake.

You love me in love and complete me in ways I never knew possible. From this day forth, I promise to listen to you and learn from you, to support you and accept your support. 

I love you. I prayed that God would lead me to this choice, to you as my husband. I praise Him this day, July 11th 2026 as His will is being fulfilled. Through the pressures of the present and the uncertainties of the future, I promise you and Him my faithfulness, to stand beside you through all of life's experiences as you follow God.

I love you, Mine❤️`}
          reverse
        />
      </div>
    </div>
  </section>
);

export default VowsSection;
