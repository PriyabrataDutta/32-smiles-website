'use client';

import { useState, useMemo } from 'react';
import { calculateEmi } from '@/lib/utils';

interface EmiCalculationOptions {
  initialAmount?: number;
  initialTenureMonths?: number;
  interestRate?: number;
}

export function useEmiCalculator({
  initialAmount = 45000,
  initialTenureMonths = 12,
  interestRate = 0,
}: EmiCalculationOptions = {}) {
  const [treatmentCost, setTreatmentCost] = useState<number>(initialAmount);
  const [tenureMonths, setTenureMonths] = useState<number>(initialTenureMonths);
  const [downPayment, setDownPayment] = useState<number>(0);

  const netLoanAmount = useMemo(() => {
    return Math.max(0, treatmentCost - downPayment);
  }, [treatmentCost, downPayment]);

  const monthlyEmi = useMemo(() => {
    return calculateEmi(netLoanAmount, tenureMonths, interestRate);
  }, [netLoanAmount, tenureMonths, interestRate]);

  return {
    treatmentCost,
    setTreatmentCost,
    tenureMonths,
    setTenureMonths,
    downPayment,
    setDownPayment,
    netLoanAmount,
    monthlyEmi,
    isZeroInterest: interestRate === 0,
  };
}
