import PropTypes from "prop-types";

function Ingress({ content }) {
	return <p>{content}</p>;
}

Ingress.propTypes = {
	content: PropTypes.string.isRequired,
};

export default Ingress;
