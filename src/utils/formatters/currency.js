/**
 *
 * @param {number} value
 * @returns {string | null}
 */
export const toCurrency = (value) => {
	if (!value || isNaN(value)) return null;

	return `${value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
};
