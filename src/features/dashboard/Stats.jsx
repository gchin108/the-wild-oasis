import { formatCurrency } from "../../utils/helpers";
import Stat from "./Stat";
import {HiOutlineBanknotes, HiOutlineBriefcase, HiOutlineCalendarDays, HiOutlineChartBar} from "react-icons/hi2"

function Stats({bookings, confirmedStays, numDays, cabinCount}){
    const numBookings = bookings.length;

    const sales = bookings.reduce((acc, cur)=>acc+cur.totalPrice,0)

    const checkins = confirmedStays.length;

    const Occupancy =
      confirmedStays.reduce((acc, cur) => acc + cur.numNights, 0) /
      (numDays * cabinCount);

    return (
      <>
        <Stat
          title="Bookings"
          color="blue"
          icon={<HiOutlineBriefcase />}
          value={numBookings}
        />
        <Stat
          title="Sales"
          color="green"
          icon={<HiOutlineBanknotes />}
          value={formatCurrency(sales)}
        />
        <Stat
          title="Check Ins"
          color="blue"
          icon={<HiOutlineCalendarDays />}
          value={checkins}
        />
        <Stat
          title="Occupancy Rate"
          color="blue"
          icon={<HiOutlineChartBar />}
          value={Math.round(Occupancy * 100) + "%"}
        />
      </>
    );

}

export default Stats;