import React, { useEffect,useState} from 'react';
import CardRecentOrders from '~/components/shared/cards/CardRecentOrders';
import CardSaleReport from '~/components/shared/cards/CardSaleReport';
import CardEarning from '~/components/shared/cards/CardEarning';
import {getOrdersCountByDate}  from '../store/orders/action'
import ContainerDashboard from '~/components/layouts/ContainerDashboard';
import {useDispatch, useSelector} from 'react-redux';
import { toggleDrawerMenu } from '~/store/app/action';
import { connect } from 'react-redux';
import { useRouter } from 'next/router'


const Index = (props) => {
    const dispatch = useDispatch();
    const router = useRouter();
    useEffect(() => {
        dispatch(getOrdersCountByDate()) ;
    }, [dispatch]) ;

    const checkLogin = async () =>{
        await setTimeout(()=>{
            if(props.isLoggedIn===false){
                router.push('/login');
            }
        },0)
    }

    useEffect(() => {
        dispatch(toggleDrawerMenu(false));
        checkLogin();

    }, []);

    const recentOrders = useSelector(state=>state.orders.recentOrders)
    const recentOrdersLoading = useSelector(state=>state.orders.recentOrdersLoading)
    console.log('recent orders '+recentOrders)


    let productnbr = 0 ;
    const data = !recentOrdersLoading && Array.isArray(recentOrders) ? recentOrders.map(order=>{productnbr+=order.products.length;return productnbr}):[]
   console.log(data)
    const dateLine = !recentOrdersLoading && Array.isArray(recentOrders) ?   recentOrders.map(order=>{return order.date}) :[]
    console.log(dateLine)
    return (
        <ContainerDashboard title="Dashboard">
            <section className="ps-dashboard" id="homepage">
                <div className="ps-section__left">
                    <div className="row">
                        <div className="col-xl-8 col-12">
                            <CardSaleReport y_axis={data} x_axis={dateLine} />
                        </div>
                        <div className="col-xl-4 col-12">
                            <CardEarning />
                        </div>
                    </div>
                    <CardRecentOrders />
                </div>
            </section>
        </ContainerDashboard>

    );
};
const mapStateToProps = state => {
    return state.auth;
};
export default connect(mapStateToProps)(Index);
