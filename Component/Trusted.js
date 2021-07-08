import Image from 'next/image'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import trusted1 from '../public/images/img1.png'
import trusted2 from '../public/images/img2.png'
import trusted3 from '../public/images/img3.png'
import trusted4 from '../public/images/img4.png'
import trusted5 from '../public/images/img5.png'
import trusted6 from '../public/images/img6.png'

const useStyles = makeStyles({
    root: {
        padding: '70px 0',
        textAlign: 'center'
    },
    title: {
        fontWeight: '600',
        paddingBottom: "20px"
    },
    grid: {
        padding: '10px'
    }
})

const Trusted = () => {
    const classes = useStyles()
    const trusted = [
        {
            id: 1,
            img: trusted1
        },
        {
            id: 2,
            img: trusted2
        },
        {
            id: 3,
            img: trusted3
        },
        {
            id: 4,
            img: trusted4
        },
        {
            id: 5,
            img: trusted5
        },
        {
            id: 6,
            img: trusted6
        },
    ]
    
    return (
        <main className={classes.root}>
            <Container>
                <Typography variant='h5' className={classes.title}>
                    Trusted by top brands, local businesses, and agencies alike
                </Typography>
                <Grid container>
                    {
                        trusted.map(trust => (
                            <Grid item xs={6} md={2} key={trust.id} className={classes.grid}>
                                {/* <img src={urlFor(trust.mainImage).url()} alt='trusted team' width={200} height={150} /> */}
                                <Image src={trust.img} alt="header" height={150} width={200} />
                            </Grid>
                        ))
                    }
                </Grid>
            </Container>
        </main>
    );
}


export default Trusted;