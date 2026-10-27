'use client';

import { useState, useMemo } from 'react';
import { CLINIC_BRANCHES } from '@/data/clinicData';
import { BranchInfo } from '@/types';

export function useBranchSelector(initialBranch: string = 'Indiranagar') {
  const [selectedBranchName, setSelectedBranchName] = useState<string>(initialBranch);

  const selectedBranch = useMemo<BranchInfo | undefined>(() => {
    return (
      CLINIC_BRANCHES.find(
        (b) => b.name.toLowerCase() === selectedBranchName.toLowerCase()
      ) || CLINIC_BRANCHES[0]
    );
  }, [selectedBranchName]);

  return {
    branches: CLINIC_BRANCHES,
    selectedBranchName,
    setSelectedBranchName,
    selectedBranch,
  };
}
