/**
 * Copyright (C) 2015 The Gravitee team (http://gravitee.io)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package io.gravitee.gateway.core.logging.condition.evaluation.el;

import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import io.gravitee.el.TemplateEngine;
import io.gravitee.el.spel.SpelTemplateEngine;
import io.gravitee.gateway.api.ExecutionContext;
import io.gravitee.gateway.api.Request;
import io.gravitee.gateway.core.logging.condition.el.ExpressionLanguageBasedConditionEvaluator;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.runners.MockitoJUnitRunner;

@RunWith(MockitoJUnitRunner.class)
public class ExpressionLanguageBasedConditionEvaluatorTest {

    @Mock
    private ExecutionContext context;

    private final TemplateEngine templateEngine = new SpelTemplateEngine();

    @Before
    public void setUp() {
        when(context.getTemplateEngine()).thenReturn(templateEngine);
    }

    @Test
    public void shouldEvalTrueWithEmpty() {
        ExpressionLanguageBasedConditionEvaluator evaluator = new ExpressionLanguageBasedConditionEvaluator(null);
        Request request = mock(Request.class);
        boolean evaluate = evaluator.evaluate(context, request);

        assertTrue(evaluate);
    }

    @Test
    public void shouldEvalTrueWithTrue() {
        ExpressionLanguageBasedConditionEvaluator evaluator = new ExpressionLanguageBasedConditionEvaluator("true");
        Request request = mock(Request.class);
        boolean evaluate = evaluator.evaluate(context, request);

        assertTrue(evaluate);
    }

    @Test
    public void shouldEvalFalseWithFalse() {
        ExpressionLanguageBasedConditionEvaluator evaluator = new ExpressionLanguageBasedConditionEvaluator("false");
        Request request = mock(Request.class);
        boolean evaluate = evaluator.evaluate(context, request);

        assertFalse(evaluate);
    }

    @Test
    public void shouldEvalFalseWithParseException() {
        ExpressionLanguageBasedConditionEvaluator evaluator = new ExpressionLanguageBasedConditionEvaluator("foo bar");
        Request request = mock(Request.class);
        boolean evaluate = evaluator.evaluate(context, request);

        assertFalse(evaluate);
    }
}
