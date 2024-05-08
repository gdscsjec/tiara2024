"use client";

import { Column } from "@tanstack/react-table";
import { utils, writeFile } from "xlsx";

export function exportExcelData<T>(
  rows: T[],
  columns: Column<T>[],
  excludeColumns: string[]
): T[] {
  const data: T[] = [];
  const naming: { [k: string]: any } = {};
  for (let i = 0; i < columns.length; i++) {
    const col = columns[i];
    if (excludeColumns.length > 0 && excludeColumns.includes(col.id)) {
      continue;
    }
    naming[col.id] = col.columnDef.header;
  }
  rows.forEach((item) => {
    const obj = item as { [K: string]: any };
    const tempObj: { [k: string]: any } = {};
    Object.keys(obj).forEach((key) => {
      if (typeof obj[key] === "object") {
        Object.keys(obj[key]).forEach((nestedKey) => {
          if (naming[nestedKey]) {
            tempObj[naming[nestedKey]] = obj[key][nestedKey];
          }
        });
      } else {
        if (naming[key]) {
          tempObj[naming[key]] = obj[key];
        }
      }
    });
    data.push(tempObj as T);
  });
  return data;
}

export function exportExcel<T>(data: T[], exportFilename: string) {
  try {
    const wb = utils.book_new();
    const ws = utils.json_to_sheet(data);
    utils.book_append_sheet(wb, ws, "Exported");
    writeFile(wb, exportFilename.concat(".xlsx"));
  } catch (ex: any) {
    alert(ex.message);
  }
}
