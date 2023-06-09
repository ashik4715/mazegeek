<?php

/*
 * This file is part of Twig.
 *
 * (c) Fabien Potencier
 * (c) Armin Ronacher
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Twig\TokenParser;

use Twig\Error\SyntaxError;
use Twig\Token;

/**
 * Extends a template by another one.
 *
 *  {% extends "base.html" %}
 */
final class ExtendsTokenParser extends AbstractTokenParser
{
    public function parse(Token $token)
    {
        $stream = $this->parser->getStream();

        if (!$this->parser->isMainScope()) {
            throw new SyntaxError('Cannot extend from a block.', $token->getLine(), $stream->getSourceContext());
        }

        if (null !== $this->parser->getParent()) {
            throw new SyntaxError('Multiple extends tags are forbidden.', $token->getLine(), $stream->getSourceContext());
        }
        $this->parser->setParent($this->parser->getExpressionParser()->parseExpression());

        $stream->expect(/* Token::BLOCK_END_TYPE */ 3);
    }

    public function getTag()
    {
        return 'extends';
    }
}

class_alias('Twig\TokenParser\ExtendsTokenParser', 'Twig_TokenParser_Extends');
