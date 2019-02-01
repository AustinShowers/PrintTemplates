document.addEventListener('DOMContentLoaded', () => {
    const discount = document.querySelector('#totalsDiscountsValue');
    if (discount) {
        const subtotal = document.querySelector('#totalsPartsValue');
        const subTotalWDiscount = Number(subtotal.innerText.replace(/\$/g, "")) +
            Number(discount.innerText.replace(/\$/g, ""));
        const row = discount.parentElement;
        row.insertAdjacentHTML('afterend', `<tr>
<td>Subtotal-Discount</td>
<td>${subTotalWDiscount}</td>
</tr>`);
    }
})