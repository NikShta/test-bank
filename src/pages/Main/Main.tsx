import React, {useState} from "react";

import {useGetCurrenciesQuery} from "../../store/currencies/currencies.api";
import {Select} from "@components/Select/Select";
import {Logo} from "@components/Logo/Logo";
import {Footer} from "@components/Footer/Footer";
import {type Option} from "@components/Select/types";

import styles from "./styles.module.scss";

const Main: React.FC = () => {
  const {data, isFetching, isError} =
    useGetCurrenciesQuery("currencies12313212");
  const [currency, setCurrency] = useState<string>("");
  const defaultOptions = data?.data.map((currency: Option) => currency.id) ?? [
    "",
  ];

  const selectedCurrency = data?.data?.find(
    (item: Option) => item?.id === currency,
  );
  const handleCurrencySelect = (currency: string): void => {
    setCurrency(currency);
  };

  return (
    <main>
      <div className={styles.content}>
        <Logo />
        <img src="/kitten.png" alt="black cat" className={styles.cat_img} />
        {isError && <div className={styles.error}>Data loading error...</div>}
        <Select
          options={defaultOptions}
          selected={selectedCurrency || null}
          isFetching={isFetching}
          onChange={handleCurrencySelect}
          placeholder="Choose currency"
        />
      </div>
      <Footer name={selectedCurrency?.name} />
    </main>
  );
};

export default Main;
