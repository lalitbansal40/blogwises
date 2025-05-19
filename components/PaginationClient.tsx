"use client";

import { useRouter, useSearchParams } from "next/navigation";
import Pagination from "@mui/material/Pagination";
import { Stack } from "@mui/material";
import { useEffect, useState } from "react";

type Props = {
  totalPages: number;
};

export default function PaginationClient({ totalPages }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    const pageParam = searchParams.get("page");
    const currentPage = pageParam ? parseInt(pageParam, 10) : 1;
    setPage(currentPage);
  }, [searchParams]);

  const handleChange = (_: React.ChangeEvent<unknown>, value: number) => {
    router.push(`?page=${value}`);
  };

  return (
    <Stack spacing={2} className="items-center mt-6">
      <Pagination
        count={totalPages}
        page={page}
        color="primary"
        onChange={handleChange}
      />
    </Stack>
  );
}
