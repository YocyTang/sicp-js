function eval(exp, env){
	if(isSelfEvaluating(exp)){
		return exp;
	}
	if(isVariable(exp)){
		return lookUpVariableValue(exp, env);
	}
	if(isQuoted(exp)){
		return textOfQuotation(exp)
	}
	if(isAssignment(exp)){
		return evalAssignment(exp, env);
	}
	if(isDefinition(exp)){
		return evalDefinition(exp, env);
	}
	if(isIf(exp)){
		return evalIf(exp, env)
	}
	if(isLambda(exp)){
		return makeProcedure(lambdaParameters(exp), lambdaBody(exp), env);
	}
	if(isBegin(exp)){
		return evalSequence(beginActions(exp), env)
	}
	if(isCond(exp)){
		return eval(condToIf(exp), env)
	}
	if(isApplication(exp)){
		return apply(eval(operator(exp), env), listOfValues(operands(exp), env))
	}
	return new Error("Unkown expression type -- EVAL ",exp)
}


function apply(procedure, args){
	if(isPrimitiveProcedure(procedure)){
		return applyPrimitiveProcedure(procedure, args)
	}
	if(isCompoundProcedure(procedure)){
		return evalSequence(procedureBody(procedure),
				extendEnviroment(procedureParameters(procedure),
					args, 
					procedureEnviroment(procedure)))
	}
	return new Error('Unkown procedure type -- APPLY ', procedure)
}
function listOfValues(exps, env){
	if(isNoOprands(exps)){
		return null
	}
	return cons(eval(firstOperand(exps), env), listOfValues(restOperand(exps), env))
}

function cons(x, y){
	return function dispatch(m){
		if(m === 0){
			return x
		}
		if(m ===1){
			return y
		}
	}
}
function car(x){
	return x(0);
}

function cdr(x){
	return x(1);
}

function evalIf(exp, env){
	if(isTrue(eval(ifPredicate(exp),env))){
		return eval(ifConsequent(exp), env)
	}
	return eval(ifAlternative(exp),env);
}

function evalSequence(exps, env){
	if(isLastExp(exps)){
		return eval(firstExp(exps), env)
	}
	eval((firstExp(exps),env))
	return evalSequence(restExps(exps), env)
}
function evalAssignment(exp, env){
	setViableValue(assignmentVariable(exp), 
		eval(assignmentValue(exp),env))
	return 'OK!'
}


