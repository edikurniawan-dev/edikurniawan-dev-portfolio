import Layout from '../components/layout';
import PortfolioCard from '../components/portfoliocard';
import Jaramba from '../images/portfolio/jaramba.png';
import PeduliPanti from '../images/portfolio/peduli-panti.png';
import PelitaBersatu from '../images/portfolio/pelita-bersatu.png';
import Annazhori from '../images/portfolio/an-nazhori.png';

export default function Experience() {
    return (
        <Layout>
            <div className="flex flex-col pt-5 md:pt-10">
                <h1 className="font-mono text-2xl font-bold underline md:text-3xl text-dark dark:text-light">
                    Portfolio
                </h1>
                <br />
                <br />
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 md:gap-14">
                    <PortfolioCard
                        image={Jaramba}
                        link="#"
                        title="Dashboard Admin Jaramba"
                        description="Dashboard Admin Jaramba is application serves to monitor the location of the bus that is running. In addition to storing route data, drivers, buses and bus travel history."
                    />
                    <PortfolioCard
                        image={PeduliPanti}
                        link="https://github.com/NurulHakim/pedulipanti"
                        title="Peduli Panti"
                        description="Peduli Panti is a website to find orphanages that need help in the form of money, food, clothing and more. This website was built using the Laravel framework and MySQL database."
                    />
                    <PortfolioCard
                        image={PelitaBersatu}
                        link="http://pelitabersatu.com/"
                        title="Pelita Barsatu"
                        description="Pelita Barsatu is a company website from Pelita Bersatu Indonesia. This websites were build using the Content Management System, namely WordPress and Elementor."
                    />
                    <PortfolioCard
                        image={Annazhori}
                        link="http://annazhori.com/"
                        title="An-Nazhori"
                        description="An-Nazhori is a company website from Yayasan Pendidikan dan Dakwah Islan An-Nazhori. This websites were build using the Content Management System, namely WordPress and Elementor."
                    />
                </div>
            </div>
        </Layout>
    );
}